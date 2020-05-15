import React, { Component } from 'react'
import Item from './item'
import './index.less'

const height = 60
const bufferSize = 5

class VirtualizedList extends Component {
  componentDidMount() {
    window.open('https://www.baidu.com/', '_self')
  }

  render() {
    const { startOffset, endOffset, visibleData }: any = this.state

    return null
  }
}

VirtualizedList.title = 'MAP'
VirtualizedList.layout = 'PRO_LAYOUT'
VirtualizedList.requireSignin = true
VirtualizedList.access = 'canReadAdminUserManagement'
export default VirtualizedList
