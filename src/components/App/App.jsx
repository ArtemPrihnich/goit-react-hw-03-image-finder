
import React, { Component } from 'react'
import ImageApi from '../../services/imageSearch'
import Searchbar from 'components/Searchbar/Searchbar'
import ImageGallery from 'components/ImageGallery/ImageGallery'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import Button from 'components/Button/Button'

export default class App extends Component {
  state = {
    page: 1,
    input: '',
    responce: null,
    error: null,
    storage: []
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.input !== this.state.input || prevState.page !== this.state.page) {
  //     console.log(prevState.page)
  //     console.log(this.state.page)
  //     ImageApi.fetchImages(this.state.input, this.state.page)
  //       // .then(responce => this.setState({ responce: responce.data.hits })) ///
  //       // .then(responce => this.setState({ responce: responce.data.hits }))
  //       .then(responce => this.setState((prevState) => {

  //         if (prevState.page === this.state.page) {
  //           // console.log(prevState.page)
  //           // console.log(this.state.page)
  //           return {
  //             responce: responce.data.hits,
  //             storage: [...responce.data.hits]
  //           }
  //         }

  //         if (prevState.page !== this.state.page) {
  //           const test = responce.data.hits.map(item => item) ///
  //           // console.log(prevState.page)
  //           // console.log(this.state.page)

  //           return {
  //             responce: responce.data.hits,
  //             storage: [...prevState.storage, ...test]
  //           }
  //         }
  //       }))
  //       // .then(responce => {
  //       //   if (prevState.page !== this.state.page) {
  //       //     const test = responce.data.hits.map(item => item) ///
  //       // //   // console.log(prevState.storage)
  //       // //   // console.log(responce.data.hits)

  //       //   return {
  //       //     responce: responce.data.hits,
  //       //     storage: [...prevState.storage, ...test]
  //       //   }
  //       //   }

  //       //   if ()
  //       // })
  //       .catch(error => this.setState({ error }))
  //   }

  // }




  async componentDidUpdate(prevProps, prevState) {
    if (prevState.input !== this.state.input & prevState.page === this.state.page) {
      const jdi = await this.setState({ page: 1 })
      ImageApi.fetchImages(this.state.input, this.state.page)
        .then(responce => this.setState((prevState) => {
          // const test = responce.data.hits.map(item => item)
          return {
            // page: 1,
            responce: responce.data.hits,
            storage: [...responce.data.hits]
          }
        }))
    }

    if (prevState.input === this.state.input & prevState.page !== this.state.page) {
      ImageApi.fetchImages(this.state.input, this.state.page)
        .then(responce => this.setState((prevState) => {
          const test = responce.data.hits.map(item => item)
          return {
            responce: responce.data.hits,
            storage: [...prevState.storage, ...test]
          }
        }))
    }
  }





  handleFormSubmit = (inputValue) => {
    this.setState({ input: inputValue })
  }

  // handleBtnClick = () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   })
  // }

  handleBtnClick = () => {
    this.setState({
      page: this.state.page + 1,
    })

    // ImageApi.fetchImages(this.state.input, this.state.page).then(responce => this.setState((prevState) => {
    //   return {
    //     responce: [...prevState.responce + responce]
    //   }
    // }))
  }

  // handleBtnClick = () => {
  //   this.setState((prevState) => {
  //     const newImagesList = {
  //       ...this.state.responce
  //     };
  //     console.log(prevState.responce)
  //     console.log(this.state.responce)
  //     return {
  //       page: this.state.page + 1,
  //       responce: [...prevState.responce, newImagesList]
  //     }
  //   })
  // }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery>
          {this.state.responce && <ImageGalleryItem items={this.state.storage} />}
          {this.state.responce && this.state.responce.length === 0 && <li>Sorry, no one images found :(</li>}
          <Button onClick={this.handleBtnClick} />
        </ImageGallery>
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
