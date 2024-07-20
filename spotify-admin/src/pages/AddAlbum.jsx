import React, { useState } from "react";
import { assets } from "../admin-assets/assets";
import axios from "axios";
import { url } from "../App";
import { toast } from "react-toastify";

const AddAlbum = () => {
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [colour, setColour] = useState("#121212");
  const [loading, setLoading] = useState(false);


  const onsubmitHandler = async (e)=>{
    e.preventDefault()
    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('name',name)
      formData.append("desc",desc)
      formData.append("image",image)
      formData.append('bgColour',colour)
      
      const response = await axios.post(`${url}/api/album/add`,formData)
      if(response.data.success){
        toast.success("album added successfully")
        setName("")
        setImage(false)
        setDesc("")
      }
      else{
        toast.error("something went wrong")
      }
    

    } catch (error) {
      toast.error("Error occured")
    }
    setLoading(false)
  }



  return loading ? (
    <div className="grid place-items-center min-h-[80vh]">
      <div className="w-16 h-16 place-self-center border-4 border-gray-600 border-t-green-800 rounded-full animate-spin"></div>
    </div>
  ) : (
    <form onSubmit={onsubmitHandler}className="flex flex-col items-start gap-8 text-gray-600">
      <div className="flex flex-col gap-4">
        <p>Upload Image</p>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          accept="image/*"
          hidden
        />
        <label htmlFor="image">
          <img
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            alt=""
            className="w-24 cursor-pointer"
          />
        </label>
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Album name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Type Here"
          className="bg-transparent outline-green-600 border border-gray-400 p-2.5 w-[max(40vw,250px)]"
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <p>Album description</p>
        <input
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          type="text"
          placeholder="Type Here"
          className="bg-transparent outline-green-600 border border-gray-400 p-2.5 w-[max(40vw,250px)]"
        />
      </div>
      <div className="flex flex-col gap-3">
        <p>Background Colour</p>
        <input
          type="color"
          onChange={(e) => setColour(e.target.value)}
          value={colour}
        />
      </div>
      <button
        type="submit"
        className="text-base bg-black text-white py-2 px-12 cursor-pointer "
      >
        ADD
      </button>
    </form>
  );
};

export default AddAlbum;