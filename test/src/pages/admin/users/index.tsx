import React, { useEffect, useState, useRef } from 'react'
import { fabric } from 'fabric'
import Svg from '../../../assects/位图.svg'
import LocationMark from './components/LocationMark'
import CustomeModal from '../../../components/CustomeModal'
import styles from './index.less'
function Users() {
  const typeRef = useRef('')
  const [modalVis, setVis] = useState(false)
  const [targetInfo, setTarget] = useState({})

  useEffect(() => {
    const rect = document.getElementById('viewport')!.getBoundingClientRect()
    var canvas: any = new fabric.Canvas('map')
    canvas.setWidth(rect.width)
    canvas.setHeight(rect.height)

    fabric.Image.fromURL(Svg, function(oImg: any) {
      oImg.toObject = function() {
        return {
          type: 'map'
        }
      }
      oImg.set({ left: 24, top: 27, selectable: false })

      canvas.setActiveObject(oImg)
      // canvas.lockMovementX = canvas.lockMovementY = true
      canvas.add(oImg)

      canvas.discardActiveObject()
      canvas.requestRenderAll()
    })
    canvas.on('mouse:down', function(options: any) {
      if (!options.target) {
        return
      }
      const itemAttributes = options.target.toObject()
      console.log('options......', options, itemAttributes)

      if (typeRef.current === 'preview' && itemAttributes.type === 'item') {
        setVis(true)
        setTarget(options.target)
        return
      }

      if (itemAttributes.type !== 'map') {
        return
      }

      console.log('typeRef.current', typeRef.current)

      console.log(options.pointer.x, options.pointer.y)
      var item1 = new fabric.Rect({
        left: options.pointer.x - 10,
        top: options.pointer.y - 10,
        fill: 'green',
        width: 20,
        height: 20
      })
      item1.toObject = function() {
        return {
          type: 'item'
        }
      }
      canvas.add(item1)
    })

    canvas.on('mouse:up', function(options: any) {
      console.log('optionsoptions  up  up ', options)
      if (options.target && options.target._objects) {
        const arr = options.target._objects
        console.log('arr', arr)
        for (const value of arr) {
          console.log('value', value.toObject())
        }
      }
    })

    //event:selected
    canvas.on('event:selected', function(options: any) {
      console.log('optionsoptions  selected  selected ', options)
    })
  }, [setVis, setTarget])

  const testProps = {
    typeChange(type: string) {
      typeRef.current = type
    }
  }

  const onOk = () => {
    setVis(false)
  }

  const onCancel = () => {
    setVis(false)
  }

  const modalProps = {
    title: 'testqeqewqe',
    visible: modalVis,
    onOk,
    onCancel,
    target: targetInfo,
    mask: false
  }

  return (
    <div id="viewport" className={styles.container}>
      <div className={styles.test}>
        <LocationMark {...testProps}></LocationMark>
      </div>

      <canvas id="map"></canvas>

      <CustomeModal {...modalProps}>
        <div>test</div>
      </CustomeModal>
    </div>
  )
}

Users.title = 'USERS_TITLE'
Users.layout = 'PRO_LAYOUT'
Users.requireSignin = true
Users.access = 'canReadAdminUserManagement'

export default Users
