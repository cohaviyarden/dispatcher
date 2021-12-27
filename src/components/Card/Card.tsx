
import { useMediaQuery } from 'react-responsive';
import { Source } from '../../types';
import { convertDate, renderTags } from '../../utils/utils';
import { ButtonProps } from '../Button/Button';
import { BodyCard, CardBtn, CardStyled, ImageCard, Description, Title, TagsContainer, Tag, Row, SourceCard, DateCard } from './style';

export interface CardProps {
  date: string;
  image: string;
  title: string;
  source: Source;
  description: string;
  tags: string[];
  button: ButtonProps;
}

const Card = (props: CardProps) => {
  const isMobileDevice = useMediaQuery({
    query: '(max-width: 600px)'
  })
    return (
      <CardStyled>
          <ImageCard src={props.image} />
          <BodyCard>
            <Row>
              <DateCard>{convertDate(props.date)}</DateCard>
              <TagsContainer>
                  {
                    renderTags(props.tags, isMobileDevice).map((tag,index) => {
                      return <Tag key={index}>{tag}</Tag>
                    })
                   }
              </TagsContainer>
            </Row> 
            <Title>{props.title}</Title>
            <SourceCard>{props.source.name}</SourceCard>
            <Description>{props.description}</Description>
            <CardBtn {...props.button}/>
          </BodyCard>
      </CardStyled>
    );
  };
  
  export default Card;