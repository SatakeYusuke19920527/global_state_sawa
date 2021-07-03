import React, {useEffect, useContext} from 'react';             
import TopPage from './TopPage' 
import {fetchGetData} from '../apis/index'
import { Store } from '../store/index'
import { GET_DATA } from '../actions/index'

const SecondPage = () => {
  const { globalState, setGlobalState } = useContext(Store)
  useEffect(() => {
    fetchGetData().then(res => {
      setGlobalState({
        type: GET_DATA,
        data: res.data
      })
    })
  }, [])
  console.log(globalState)

 
  return (
    <div>
      SecondPage
    </div>
  )
}
 
export default SecondPage;  