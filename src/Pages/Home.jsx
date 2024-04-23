import { Box } from '@chakra-ui/react'
import React from 'react'
import { BeautifulUI, CodeDesign, DesignSystem, Facilities, KeyFeatures, ToolsCombination, UITemplates } from '../Components'
import { Footer, Navbar } from '../Layouts'

const Home = () => {
    return (
        <Box>
            {/* <Navbar /> */}
            <DesignSystem />
            <KeyFeatures />
            <BeautifulUI />
            {/* <CodeDesign /> */}
            <ToolsCombination />
            <Facilities />
            <UITemplates />
            {/* <Footer /> */}

        </Box>
    )
}

export default Home