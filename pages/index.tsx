import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout'
import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import { Divider } from "@chakra-ui/react"
import firebase from '../config/firebase'
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