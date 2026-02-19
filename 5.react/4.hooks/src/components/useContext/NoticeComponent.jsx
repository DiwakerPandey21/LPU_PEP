// File: create global box(context file, which comes from React) for us, which is 1st empty and then later provider will put data inside it.

import React from 'react'
import { createContext } from 'react'

const NoticeComponent = createContext();

export default NoticeComponent