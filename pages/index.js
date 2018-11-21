import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout';
import AppProvider, { AppContext } from '../components/AppProvider';
import ShowSearch from '../components/ShowSearch';

const Index = () => (
  <Layout>
    <h1>Search for TV shows</h1>
    <ShowSearch />
  </Layout>
)

export default Index;
