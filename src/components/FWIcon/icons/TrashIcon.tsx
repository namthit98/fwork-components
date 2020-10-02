import React from 'react'
import IconBase from './IconBase'

const TrashIcon: React.FC<any> = (props: any) => (
  <IconBase viewBox="0 0 16 16" {...props}>
    <path
      d="M5.334 14a1.336 1.336 0 0 1-1.33-1.334v-8h8v8A1.337 1.337 0 0 1 10.67 14zm4-7.668v6a.331.331 0 0 0 .33.335.336.336 0 0 0 .334-.335v-6a.335.335 0 0 0-.334-.334.331.331 0 0 0-.33.336zM6 6.332v6a.331.331 0 0 0 .33.335.336.336 0 0 0 .334-.335v-6a.335.335 0 0 0-.334-.334.331.331 0 0 0-.328.336zM4 3.998a.667.667 0 1 1 0-1.334h1.33A.667.667 0 0 1 6 1.999h4a.667.667 0 0 1 .67.665H12a.667.667 0 1 1 0 1.334z"
      fill="currentColor"
    ></path>
  </IconBase>
)

export default TrashIcon
