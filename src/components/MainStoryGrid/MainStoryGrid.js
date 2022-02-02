import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import {QUERIES} from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 2px;
  margin-bottom: 48px;
  padding: 24px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 15.75rem;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 4fr 3fr 2fr;
    grid-template-areas:
     'main-story secondary-stories opinion-stories'
     'main-story advertisement advertisement';
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  border-right: 2px solid var(--color-gray-300);
  padding-right: 24px;
  margin-right: 24px;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories; 
  border-right: 2px solid var(--color-gray-300);
  padding: 0 24px;
  margin-bottom: 24px;

`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
  padding-left: 24px;

  ${StoryList} {
    @media ${QUERIES.tabletOnly} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      background-color: var(--color-gray-100);
      gap: 32px;
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  border-top: 2px solid var(--color-gray-300);
  padding-left: 24px;
  padding-top: 24px;

`;

export default MainStoryGrid;
