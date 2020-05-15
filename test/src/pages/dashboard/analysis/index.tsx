import React, { PureComponent, Component } from 'react'
import { Button } from 'antd'
// function Analysis() {
//   return <div>analysis</div>
// }

class Item extends PureComponent {
  render() {
    const {
      props: { name, index }
    }: any = this
    console.log('渲染了123123', name, index)
    return <div>{name}</div>
  }
}

class Analysis extends PureComponent {
  static title: string
  static layout: string
  static requireSignin: boolean
  static access: string

  state = {
    data: [],
    index: 0
  }

  handleClick() {
    this.setState({
      data: [...this.state.data, { name: 'qweqweqwe' }],
      index: this.state.index + 1
    })
  }

  render() {
    const { data, index } = this.state
    console.log('datdat', data)
    return (
      <div>
        <Button onClick={this.handleClick.bind(this)}>点击请23423</Button>
        {data.map((v: any, index: number) => {
          const a = {}
          const obj = {
            ...v,
            ...a
          }
          return <Item {...obj} index={index}></Item>
        })}
      </div>
    )
  }
}

Analysis.title = 'ANALYSIS_TITLE'
Analysis.layout = 'PRO_LAYOUT'
Analysis.requireSignin = true
Analysis.access = 'canReadDashboardAnalysis'

export default Analysis
