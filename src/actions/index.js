import axios from 'axios';
export const SEARCH_COUNTRY='SEARCH_COUNTRY';
export const GET_COUNTRIES='GET_COUNTRIES';
export const CHECK_COUNTRY='CHECK_COUNTRY';
export const POST_COUNTRIES='POST_COUNTRIES';
export const GET_ALL_ACTIVITIES='GET_ALL_ACTIVITIES';
export const GET_COUNTRY_BYACTIVITIES='GET_COUNTRY_BYACTIVITIES';
export const GET_BYID='GET_BYID';
export const GET_LASTACTIVITY='GET_LASTACTIVITY';
const API=`https://proyectoindividualcountries.herokuapp.com`



export const getContry =(offset,sort,continent='')=>(dispatch)=> { 
    axios.get(`${API}/Countries/?offset=${offset}&sort=${sort}&continent=${continent}`)
   
    .then(json => {
            dispatch({
                type: 'GET_COUNTRIES',
                payload: json.data });
         
        });
            
}

export const searchContry =(name)=>(dispatch)=> { 
    axios.get(`${API}/Countries/?name=${name}`)
   
    .then(json => {
        if(json.length>0){
            dispatch({type: 'SEARCH_COUNTRY',payload: json.data });
        }});    
}
export const checkCountry =(name)=>(dispatch)=> { 
    axios.get(`${API}/Countries/?name=${name}`)
   
    .then(json => {
        if(json.length>0){
            dispatch({
                type: 'CHECK_COUNTRY',
                payload: json.data });
            }});            
}

export const getByID =(id)=>(dispatch)=> { 
    axios.get(`${API}/Countries/${id}`)
   
    .then(json => {
            dispatch({
                type: 'GET_BYID',
                payload: json.data });
            });            
}

export const lastActivity =()=>(dispatch)=> { 
    axios.get(`${API}/Activity?update=true`)
   
    .then(json => {
            dispatch({
                type: 'GET_LASTACTIVITY',
                payload: json.data });
            });            
}

export const getallActivities =()=>(dispatch)=> { 
    axios.get(`${API}/Activity`)
   
    .then(json => {
        if(json.data.length>0){
            dispatch({
                type: 'GET_ALL_ACTIVITIES',
                payload: json.data });
            }});            
}

export const getCountriesbyActivities =(activity,offset,sort,continent)=>(dispatch)=> { 
    axios.get(`${API}/Activity?name=${activity}&offset=${offset}&sort=${sort}&continent=${continent}`)
   
    .then(json => {
            dispatch({
                type: 'GET_COUNTRY_BYACTIVITIES',
                payload: json.data });
            });            
}

export const postActivity =(activity)=>(dispatch)=> { 
    
    var data=JSON.stringify(activity)
    console.log(data)
    fetch(`${API}/Activity`,{
        headers: {
            'Content-Type': 'application/json'
          },
        method:'POST',
        body:data
        }
    ).then(response => response.json()
    ).then(json => {
        dispatch({
             type: 'POST_COUNTRIES',
            payload: json });
        }); 
}

  