import React, { Component } from 'react'

export default class Item extends Component {
  node: HTMLDivElement | null | undefined
  componentDidMount() {
    const { cachePosition, index }: any = this.props
    cachePosition(this.node, index)
  }

  render() {
    const { index, item }: any = this.props

    return (
      <div
        className="list-item"
        style={{ height: '60px' }}
        ref={node => {
          this.node = node
        }}
      >
        <p>#${index} eligendi voluptatem quisquam</p>
        <p>Modi autem fugiat maiores. Doloremque est sed quis qui nobis. Accusamus dolorem aspernatur sed rem.</p>
      </div>
    )
  }
}
