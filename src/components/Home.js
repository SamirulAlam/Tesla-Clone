import React from 'react'
import styled from "styled-components"
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section title="Model S" description="Order Online for Touchless Delivery" image="model-s.jpg" leftBtn="CUSTOM ORDER" rightBtn="EXCITING INVENTORY" />
            <Section title="Model Y" description="Order Online for Touchless Delivery" image="model-y.jpg" leftBtn="CUSTOM ORDER" rightBtn="EXCITING INVENTORY" />
            <Section title="Model 3" description="Order Online for Touchless Delivery" image="model-3.jpg" leftBtn="CUSTOM ORDER" rightBtn="EXCITING INVENTORY" />
            <Section title="Model X" description="Order Online for Touchless Delivery" image="model-x.jpg" leftBtn="CUSTOM ORDER" rightBtn="EXCITING INVENTORY" />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                image="solar-panel.jpg" leftBtn="ORDER NOW" rightBtn="LEARN MORE"
            />
            <Section
                title="Solar for New Roof"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                image="solar-roof.jpg" 
                leftBtn="ORDER NOW" 
                rightBtn="LEARN MORE"
            />
            <Section
                title="Accessories"
                image="accessories.jpg" 
                leftBtn="SHOP NOW"
            />
        </Container>
    )
}

export default Home

const Container=styled.div`
    height: 100vh;
`;