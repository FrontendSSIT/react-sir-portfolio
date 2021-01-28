import { faClosedCaptioning, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import { NavBar } from '../NavBar/NavBar'
import ImageUploading from "react-images-uploading";
import './Blog.css'
export const Blog = () => {
    const [value,setValue]=useState({})
    console.log(value)


    const [imagess, setImages] = useState([]);
    const maxNumber = 69;
    const uploadImage= (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList);
        setImages(imageList);
    };

   const handleValue=(e)=>{
       const newValue={...value}
       newValue[e.target.name]=e.target.value;
       setValue(newValue)
    }
    const email=localStorage.getItem('email')
    const formData=new FormData()
    formData.append('userkey',email)
    formData.append('caption',value.message)
    formData.append('images[]',imagess[0]?.file)
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
        </form>
        <div>
        <ImageUploading
        multiple
        value={imagess}
        onChange={uploadImage}
        maxNumber={1}
        dataURLKey="data_url"
    >
        {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
   
            dragProps
        }) => (
                // write your building UI
                <div>
                    <button className="uploadbtn" id="imgBtn"
                        style={isDragging ? { color: "red" } : null}
                        onClick={ onImageUpload}
                        {...dragProps}
                    >
                    <faCloudUploadAlt/> Upload Your Image
    </button>
    &nbsp;
                  {
                   imagess[0]?<button onClick={onImageRemove} className="closebtn"><faClosedCaptioning/>Close </button>:null
                  }
                    {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                            <img src={image.data_url} alt="" width="100" />
                           
                        </div>
                    ))}
                </div>
            )}
    </ImageUploading>
        </div>
      
        <button className="text-right" onClick={postSubmit} style={{marginTop:"30px"}}>Post</button>
        </Col>
        </Row>
        </Container>
        </section>
    )
}
