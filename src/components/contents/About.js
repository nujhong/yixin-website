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
      <Animation className="wow fadeIn" />
      {console.log(columns)}
    </div>
  </div>
)

export const query = graphql`
  fragment AboutFragment on ContentYaml {
    title
    summary
    columns {
      title
      summary
      image
      credit
    }
  }
`
