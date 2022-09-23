
import React, { Component } from 'react'
import ImageApi from '../../services/imageSearch'
import Searchbar from 'components/Searchbar/Searchbar'
import ImageGallery from 'components/ImageGallery/ImageGallery'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import Button from 'components/Button/Button'
import Loader from 'components/Loader/Loader'
import Modal from 'components/Modal/Modal'
import '../../styles.css'

export default class App extends Component {
  state = {
    page: 1,
    input: '',
    responce: null,
    storage: null,
    loading: false,
    openModal: false,
    modalContent: {
      largeImageURL: '',
      tags: ''
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input || prevState.page !== this.state.page) {
      this.setState({ loading: true })
      ImageApi.fetchImages(this.state.input, this.state.page)
        .then(responce => this.setState((prevState) => {
          console.log(responce)
          return {
            responce: [...prevState.responce, ...responce.data.hits],
            storage: responce.data
          }
        })).catch(error => this.setState({ error })).finally(result => this.setState({ loading: false }))
    }
  }

  handleFormSubmit = (inputValue) => {
    this.setState({
      page: 1,
      input: inputValue,
      responce: []
    })
  }

  handleBtnClick = () => {
    console.log(this.state.storage?.totalHits)
    console.log(this.state.responce?.length)
    this.setState({
      page: this.state.page + 1,
    })

  }

  onClick = (modalContent) => {
    console.log(this.state.modalContent.largeImageURL)
    this.setState({
      openModal: true,
      modalContent
    })
  }

  onClose = () => {
    this.setState({
      openModal: false,
      modalContent: {
        largeImageURL: '',
        tags: ''
      }
    })
  }

  render() {
    return (
      <div className='App'>
        {this.state.openModal && <Modal modalClose={this.onClose}>
          <img src={this.state.modalContent.largeImageURL} alt={this.state.modalContent.tags} />
        </Modal>}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Loader visible={this.state.loading} />
        <ImageGallery>
          {/* <Loader visible={this.state.loading} /> */}
          {/* {this.state.responce?.length === 0 && <li>Sorry, no one images found :(</li>} */}
          {this.state.responce && <ImageGalleryItem items={this.state.responce} openModal={this.onClick} />}
        </ImageGallery>
        {this.state.responce?.length > 0 && this.state.storage?.totalHits > this.state.responce?.length && <Button onClick={this.handleBtnClick} />}
      </div>
    )
  }
}


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
