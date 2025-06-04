import Button from 'components/button';
import Select from 'components/select';
import Title from 'components/title';
import useWindowDimensions from 'hooks/useWindowDimensions';
import React, { useEffect, useState } from 'react';
import { useDefaultSelect } from 'components/select/styles';
import ModalController from 'modules/modal/controller';
import Store from 'modules/modal/lib/Store';
import { Modal } from 'modules/modal';


const Home = () =>  {
	const { width } = useWindowDimensions();

	useEffect(()=>{
		setIsMobile ( width<780)
	},[width])

	const[isMobile, setIsMobile] = useState(false);

	console.log(useDefaultSelect().defaultSelect);

	const handleOpenCheckWord = () => {
		console.log('ytut');
<Modal/>
  };

	return (

		<div>
 <div >
      {ModalController('sendCheckWord')}
      {ModalController('сhangePassword')}
      {ModalController('123')}

    </div>

			<Title>{isMobile ? 'Mobile':'Desktop'}</Title>

			<Button
	  			 text="Нажми"
	  			 handler={()=>console.log('click')}
	 		 />

	  		<Select
				options={[
   	 				{ name: 'Опция 1', value: '1' },
					{ name: 'Опция 2', value: '2' },
					{ name: 'Опция 3', value: '3' },
 				]}
  				classes={useDefaultSelect().defaultSelect} //???
  				placeholder='выбери чтонить'
	  		/>

			<button onClick={handleOpenCheckWord}>Проверить слово</button>
		</div>
	);
};

export default Home;