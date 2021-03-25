import Head from 'next/head'
import MainLayout from '../components/layouts/frontLayout/MainLayout'
import Hero from '../components/Hero'
import Features from '../components/Features'
import { Divider } from "@chakra-ui/react"
import {
  Box,
} from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <MainLayout>
        <Hero />
        <Divider />
        <Features />
      </MainLayout>
    </>
  )
}

export async function getStaticProps(context) { 
  return {
    props: {}
  }
}