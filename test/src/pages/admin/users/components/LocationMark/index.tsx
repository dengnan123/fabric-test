import React, { useState } from 'react'
import { Button } from 'antd'

function Test(props: any) {
  const { typeChange } = props
  const [type, setState] = useState('mark')
  const _typeChange = (type: React.SetStateAction<string>) => {
    setState(type)
    typeChange(type)
  }
  return (
    <div>
      {type === 'mark' ? (
        <Button
          type="primary"
          onClick={() => {
            _typeChange('preview')
          }}
        >
          标记
        </Button>
      ) : (
        <Button
          type="primary"
          onClick={() => {
            _typeChange('mark')
          }}
        >
          预览
        </Button>
      )}
    </div>
  )
}

export default Test
