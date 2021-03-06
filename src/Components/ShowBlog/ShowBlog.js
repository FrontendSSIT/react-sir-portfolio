import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import blogAthor from '../../images/PortfollioImg.jpg'
import { Link } from 'react-router-dom'
import { NavBar } from '../Home/NavBar/NavBar'
import likeLogo from '../../images/Like_Outline-01.png'
import isLiked from '../../images/Like-Fill-01.png'
import commentLogo from '../../images/Comment-Outline-01.png'

export const AllBlog=()=>{
  const [blog,setBlog]=useState([])
  const email=localStorage.getItem('email')
  useEffect(()=>{
    const formData=new FormData()
    formData.append("userkey",email)
    const url=`https://friendslink.xyz/advocateshameem.me/post/readPosts.php`
    fetch(url,{
    method:'POST',
    body:formData,
    })
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
    <NavBar/>
    <Container>
      <Row>
      <Col lg={12}>
       {
         blog.map((vlog,index)=><ShowBlog vlog={vlog} index={index}/>)
       }
      </Col>
      </Row>
    </Container>
    </section>
  )
}



export const ShowBlog = ({vlog,index}) => {



  const [comment,setComment]=useState(false)
  const [commentValue,setCommentValue]=useState('')

  const email=localStorage.getItem('email')
  const name=localStorage.getItem('username')
 const handleCommentValue=(e)=>{
     const newComment=e.target.value;
     setCommentValue(newComment)
}

  const handleComment=(e)=>{
    e.preventDefault();
    const formData=new FormData()
    formData.append("post_id",vlog.post_id)
    formData.append("comment",commentValue)
    formData.append("userkey",email)
    formData.append("username",name)
    const url=`https://friendslink.xyz/advocateshameem.me/post/createComment.php`
    fetch(url,{
      method:'POST',
      body:formData,
       })
       .then(res=>{
        if(res.status===201){
          res.json()
          .then(result=>{
            console.log('comment done',result,vlog.post_id)
          })
        
        }
        
      })
      setCommentValue('')
    }


const [like,setLike]=useState(false)
const totalLike=parseInt(vlog.likes)
const [total,setTotal]=useState(totalLike)
const handleLike=(e)=>{
 if(vlog.is_liked=="0"){
  const newTotal=totalLike+1;
  setTotal(newTotal)
 }
 else{
  const newTotal=totalLike-1;
  setTotal(newTotal)
 }
  
  const url=`https://friendslink.xyz/advocateshameem.me/post/updateLike.php`
  const formData=new FormData()
  formData.append("post_id",vlog.post_id)
  formData.append("userkey",email)
  formData.append("username",name)
  fetch(url,{
    method:'POST',
    body:formData,
     })
     .then(res=>{
      if(res.status===200){
        res.json()
        .then(result=>{
          console.log('comment done',result)
        })
      }
    })
    window.location.reload();
  }

const handleDelete=()=>{
  const formData=new FormData()
  formData.append("post_id",vlog.post_id)
  const url=`https://friendslink.xyz/advocateshameem.me/post/deletePost.php`
  fetch(url,{
    method:'POST',
    body:formData,
  })
  .then(res=>{
    if(res.status===200){
   
      res.json()
      .then(result=>{
        console.log('comment done',result)
      })
    }
  })
  window.location.reload();
}

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
           {
             email==="shameemsardar84@gmail.com"? <button onClick={handleDelete}>Delete</button>:null
           }
              <Card.Header>
              <div style={{display:"flex"}}>
              <div><img src={blogAthor} alt="" width="80px" height="80px" style={{borderRadius:"50%",marginRight:"10px"}}/></div>
              <h4>Shameem Sardar </h4>
              </div>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {vlog.caption}
                </Card.Text>
              </Card.Body>
            </Card>
          
            <span style={{marginRight:"10px"}} onClick={()=>{
              setLike(!like)
              handleLike()}}>{ total} {vlog.is_liked=="1"||like?<><img src={isLiked} alt="" width="35px" height="35px" /></>:<><img src={likeLogo} alt="" width="35px" height="35px" /></>} </span>
            <span onClick={()=>setComment(!comment)}> <img src={commentLogo} alt="" width="40px" height="45px" /></span>
            {
              comment?
             
              <Comment vlog={vlog} index={index}/>
              :null
            }
            {
              comment?
              <Row>
              <Col lg={vlog.images[0]?8:12}>
             <form onSubmit={handleComment}>
             <div>
             <textarea style={{width:"100%" ,padding:"10px"}} placeholder="comment....." name="comment" onChange={handleCommentValue} value={commentValue}></textarea>
            {email&&email!==undefined?<button onClick={handleComment}><FontAwesomeIcon icon={faPaperPlane} /> </button>:<Link to="/log"><button>Login</button></Link>}
           </div>
             </form>
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


export const Comment=({vlog,index})=>{
  const [blogComment,setBlogComment]=useState([])
  const formatter = buildFormatter(frenchStrings)
  useEffect(()=>{
    setTimeout(() => {
    const formData=new FormData()
    formData.append("post_id",vlog.post_id)
    const url=`https://friendslink.xyz/advocateshameem.me/post/readComments.php`
    fetch(url,{
      method:'POST',
      body:formData,
    })
    .then(res=>{
      if(res.status===200){
        res.json()
        .then(result=>{
          setBlogComment(result.records)
        })
      }
    })
  },1000)
  },)
  const commentDelete=(commnetId)=>{
    const formData=new FormData()
    formData.append("cmt_id",commnetId)
  const url=`https://friendslink.xyz/advocateshameem.me/post/deleteComment.php`
  fetch(url,{
    method:'POST',
    body:formData,
  })
  .then(res=>{
    if(res.status===200){
   
      res.json()
      .then(result=>{
        console.log('comment done',commnetId,result)
      })
    }
  })
  }
  const email=localStorage.getItem('email')
  return(
    <section>
    <Container>
     {
       blogComment.map(comment=>{
     
         return(
          <Row>
          <Col lg={vlog.images[0]?8:12} style={{marginBottom:"5px",marginTop:"20px"}}>
          <div>
          <Card
          style={{width:'100%'}}
          className="mb-2"
        >
       {email==="shameemsardar84@gmail.com"? <button onClick={()=>{commentDelete(comment.cmt_id)}}>Delete</button>:null}
          <Card.Header>
          <div style={{display:"flex"}}>
          <h4>{comment.username}</h4>
          </div>
          </Card.Header>
          <Card.Body>
            <Card.Text>
             {comment.comment} 
            </Card.Text>
            <Card.Text>
            <TimeAgo date={comment.date} formatter={formatter} />
           </Card.Text>
          </Card.Body>
          
        </Card>
          </div>
          </Col>
          </Row>
         )
       })
     }
    </Container>
    </section>
  )
}