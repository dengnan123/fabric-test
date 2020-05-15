import React, { useMemo, useState, useCallback, useEffect } from 'react'
import { Button } from 'antd'
function Item(...props: any) {
  const [index, setIndex] = useState(0)
  const change = useCallback(() => {
    setIndex(v => {
      return v + 1
    })
  }, [setIndex])
  const render = useMemo(() => {
    console.log('渲染iteiteite', props)
    return <div onClick={change}>{props.name}</div>
  }, [...props])
  return render
}

// function Item({ name }: any) {
//   const [index, setIndex] = useState(0)
//   const change = useCallback(() => {
//     setIndex(v => {
//       return v + 1
//     })
//   }, [setIndex])
//   const render = useMemo(() => {
//     console.log('渲染iteiteite...', name)
//     return <div onClick={change}>{name}</div>
//   }, [name])
//   return render
// }

function Test() {
  console.log('渲染test组件')
  return <div>qweqweqweq</div>
}

function Monitor() {


  const initArr: any = []
  const [data, setData] = useState(initArr)
  const handleClick = () => {
    setData((v: any) => {
      return [...v, { name: 'qweqweqwe' }]
    })
  }

  const getTest = useMemo(() => {
    return <Test></Test>
  }, [])

  return (
    <div>
      <Button onClick={handleClick}>点击请23423</Button>
      {getTest}
      {data.map((v: any, index: number) => {
        return <Item {...v}></Item>
      })}
    </div>
  )
}

Monitor.title = 'MONITOR_TITLE'
Monitor.layout = 'PRO_LAYOUT'
Monitor.requireSignin = true
Monitor.access = 'canReadDashboardMonitor'

export default Monitor
