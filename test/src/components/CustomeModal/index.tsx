import { Modal, Button } from 'antd'
import React, { useState, useEffect } from 'react'

export default (props: any) => {
  const { children, target } = props
  useEffect(() => {
    console.log('targettarget', target)
    //ant-modal-wrap
    // 找到组件改变组件的位置
    const ele: any = document.getElementsByClassName('ant-modal')
    if (ele && ele.length) {
      const _ele = ele[0]
      _ele.style.position = 'absolute'
      //transform: translateZ(2px)
      //   _ele.style.transform = `translate(${target.left}px,${target.top}px)`
      _ele.style.top = `${target.top - 100}px`
      _ele.style.left = `${target.left}px`
    }

    return () => {
      console.log('组件销毁了124324')
    }
  }, [target])

  return <Modal {...props}>{children}</Modal>
}
