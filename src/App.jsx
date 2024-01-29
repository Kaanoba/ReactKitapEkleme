import {useEffect, useRef, useState} from "react";


function App() {
  
  const [bookName , setBookName] = useState('')
  const [page , setPage] = useState(0)
  const [yazarName , setYazarName] = useState('')
  const [data, setData] = useState([{}])


  let alertMessage;
    const inputRef = useRef();
  const addData = () => {
      setData([...data, ({bookName: bookName, page: page, yazarName: yazarName})])
      alertMessage ='Lütfen tüm alanları doldurunuz'
      console.log(inputRef.current)
  }



    return (
      <>

        <div>
          <h1 style={{textAlign: 'center'}}>Kitap Ekleme İşlemi</h1>
          <hr/>
          <div style={{textAlign: 'center', marginBottom: '20px'}}>
            Kitap Adı: <input onChange={(e) => {


                setBookName(e.target.value)

          }} type="text" name="" id=""/>
          </div>
          <div style={{textAlign: 'center', marginBottom: '20px'}}>
            Sayfa Sayısı: <input ref={inputRef} onChange={(e) => {

              setPage(Number(e.target.value))

          }}  type="text" name="" id=""/>
          </div>
          <div style={{textAlign: 'center'}}>
            Yazar Adı: <input onChange={(e) => {

              setYazarName(e.target.value)

          }}  type="text" name="" id=""/>
          </div>
          <div style={{textAlign: 'center', marginTop: '20px'}}>
            <button onClick={addData}>Kitap Kaydet</button>
          </div>

        </div>

        <div>
          <h1 style={{textAlign: 'center'}}>Kitaplar</h1>
          <div style={{textAlign: 'center'}}>
            {
              data.map((a, b) => (
                  a.bookName && a.page && a.yazarName ?
                  <div style={{padding: '20px', border: '1px solid black', marginBottom: '20px'}} key={b}>
                    <p>Kitap Adı: {a.bookName}</p>
                    <p>Sayfa Sayısı: {a.page}</p>
                    <p>Yazar Adı {a.yazarName}</p>
                  </div>

                : <div>
                    <h1>{alertMessage}</h1>
                      </div>
              ))
            }
          </div>


        </div>
      </>
  )
}


export default App
