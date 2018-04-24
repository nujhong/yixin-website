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

import Table from './Table'
import Animation from './Animation'

const About = ({ data }) => (
  <div className="columns">
    <div className="column is-12">
      <div className="content has-text-centered">
        <h1 className="subtitle">超过30年房屋建筑装潢设计经验</h1>
        <p className="is-size-3">收费合理</p>
      </div>
      <Animation className="wow fadeIn">
        <Table />
      </Animation>
    </div>
  </div>
)

export default About
