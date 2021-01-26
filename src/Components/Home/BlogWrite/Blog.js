import React, { useState } from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import { NavBar } from '../NavBar/NavBar'
import './Blog.css'
export const Blog = () => {
    const [value,setValue]=useState({})
    console.log(value)
   const handleValue=(e)=>{
       const newValue={...value}
       newValue[e.target.name]=e.target.value;
       setValue(newValue)
    }
    const email=localStorage.getItem('email')
    const formData=new FormData()
    formData.append('userkey',email)
    formData.append('caption',value.message)
    formData.append('images[]',value.file)
      const postSubmit=()=>{
          const url=`https://friendslink.xyz/advocateshameem.me/post/createPost.php`
          fetch(url,{
          method:'POST',
          body:formData,
          })
          .then(res=>{
              if(res.status===200){
                res.json()
                .then(result=>{
                    console.log('done',result)
                })
              }
          }
            
            )
         
        }
    return (
        <section>
        <NavBar/>
        <Container>
        <Row className="justify-content-center">
        <Col lg={10}>
        <form>
        <div className="blog">
        <textarea placeholder="Write your Post" name="message" onChange={handleValue}></textarea>
        </div>
        <div>
        <label for="files"> Hello</label>
        <input type="file" id="files" style={{display:"none"}} name="file" onChange={handleValue} />
        </div>
        </form>
        <button className="text-right" onClick={postSubmit}>Post</button>
        </Col>
        </Row>
        </Container>
        </section>
    )
}
