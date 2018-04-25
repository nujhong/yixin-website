import React from 'react'
import {
  Card,
  CardImage,
  CardContent,
  Image,
  Columns,
  Column,
  Content,
  Title,
} from 'bloomer'

import Table from '../Table'
import Animation from '../Animation'

export default ({ data: { title, summary, columns } }) => (
  <div className="columns">
    <div className="column is-12">
      <div className="content has-text-centered">
        <h1 className="subtitle">{title}</h1>
        <p className="is-size-3">{summary}</p>
      </div>
      <div className="columns">
        {columns.map(({ title, text, image, credit }, index) => (
          <div className="column">
            <Animation
              className="wow zoomIn content has-text-centered"
              data-wow-duration={`${(index + 1) * 0.3}s`}
            >
              <figure className="image is-128x128 is-margin-x-auto">
                <img src={image} />
              </figure>
              <h2 className="title is-4">{title}</h2>
              <p>{text}</p>
            </Animation>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export const query = graphql`
  fragment AboutFragment on MarkdownRemark {
    frontmatter {
      title
      summary
      columns {
        title
        text
        image
      }
    }
  }
`
