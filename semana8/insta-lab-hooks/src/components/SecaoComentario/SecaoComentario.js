import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const SecaoComentario = (props) => {

	const [inputValue, setInputValue] = useState('');

	const inputHandle = (e) => {
		setInputValue(e.target.value)
	}

	return (
		<div>
		<CommentContainer>
			<InputComment
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={inputValue}
				onChange={inputHandle}
			/>
			<button onClick={() => { props.enviarComentario(inputValue) }} >Enviar</button>
			
		</CommentContainer>
		{props.commentList.map((comment)=>{
			return <p>--{comment}</p>
		})}
		</div>
	)
}


export default SecaoComentario