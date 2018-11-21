import React from 'react'
import AppProvider from '../components/AppProvider';
import App, { Container } from 'next/app';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </Container>
    )
  }
}

export default MyApp;
