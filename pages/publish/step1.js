import * as React from 'react';
import { Flex } from '@rebass/grid';
import styled from 'styled-components';
import { SloganTitle } from '../../components/elements/Typography';
import { Container } from '../../components/elements/Layout';
import PublishPodcastForm from '../../components/PublishPodcastForm';
import PleaseSignIn from '../../components/PleaseSignIn';

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;


const Add_Podcast = (props) => (
    <Flex flex="1 1 auto" flexDirection="column">
        <Flex py={5} flexDirection="column" alignItems="center" as="section">
            <Container justifyContent="flex-start" flexDirection="column">
                <PleaseSignIn>
                    <SloganTitle>Help Us Grow Our Diversity.</SloganTitle>
                    <Columns>
                        <PublishPodcastForm  id={props.query.id} />
                    </Columns>
                </PleaseSignIn>
            </Container>
        </Flex>
    </Flex>
);

export default Add_Podcast;