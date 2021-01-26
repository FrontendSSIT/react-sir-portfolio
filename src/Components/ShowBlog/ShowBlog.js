import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import blogImg from '../../images/t1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment,faThumbsUp } from '@fortawesome/free-solid-svg-icons'




export const AllBlog=()=>{
  const [blog,setBlog]=useState([])

  useEffect(()=>{
    const url=`https://friendslink.xyz/advocateshameem.me/post/readPosts.php`
    fetch(url)
    .then(res=>{
      if(res.status===200) {
        res.json()
    .then(result=>{
      setBlog(result.records)
    })
      }
    })
  },[])

  return(
    <section>
    <Container>
      <Row>
      <Col lg={12}>
       {
         blog.map(vlog=><ShowBlog vlog={vlog}/>)
       }
      </Col>
      </Row>
    </Container>
    </section>
  )
}



export const ShowBlog = ({vlog}) => {
  const [comment,setComment]=useState(false)
  console.log(vlog)
    return (
        <section>
        <Container>
        <Row>
        <Col lg={12} style={{marginBottom:"30px"}}>
       <div>
              <Row>
             {
              vlog.images[0]?<Col lg={4}>
               <div>
               <img src={vlog.images[0]} alt="" width="100%" height="400px"/>
               </div>
               </Col>:null
             }
              <Col lg={vlog.images[0]?8:12}>
            <Card
              style={{width:'100%',height:"370px",overflow:"scroll"}}
              className="mb-2"
            >
              <Card.Header>
              <div style={{display:"flex"}}>
              <div><img src={vlog.images[0]} alt="" width="80px" height="80px" style={{borderRadius:"50%",marginRight:"10px"}}/></div>
              <h4>Shameem Sardar</h4>
              </div>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {vlog.caption}
                </Card.Text>
              </Card.Body>
            </Card>
          
            <span><FontAwesomeIcon icon={faThumbsUp} /></span>
            <span onClick={()=>setComment(!comment)}><FontAwesomeIcon icon={faComment} />Comment</span>
            {
              comment?
              <Row>
              <Col lg={vlog.images[0]?8:12} style={{marginBottom:"50px",marginTop:"20px"}}>
              <div>
              <Card
              style={{width:'100%'}}
              className="mb-2"
            >
              <Card.Header>
              <div style={{display:"flex"}}>
              <div><img src={vlog.images[0]} alt="" width="80px" height="80px" style={{borderRadius:"50%",marginRight:"10px",}}/></div>
              <h4>Shameem Sardar</h4>
              </div>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                 Hello
                </Card.Text>
              </Card.Body>
              
            </Card>
              </div>
              </Col>
              </Row>
              
              :null
            }
            {
              comment?
              <Row>
              <Col lg={vlog.images[0]?8:12}>
              <div>
              hi
              </div>
              </Col>
              </Row>
              
              :null
            }
            </Col>
            </Row>
       </div>
        </Col>
        </Row>
        </Container>
        </section>
    )
}
