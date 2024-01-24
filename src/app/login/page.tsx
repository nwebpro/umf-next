'use client'
import { Button, Col, Row } from 'antd';
import loginImage from '@/assets/login-image.svg'
import Image from 'next/image';
import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import { SubmitHandler } from 'react-hook-form';

type FormValues = {
	id: string;
	password: string;
}

const Login = () => {
	const onSubmit:SubmitHandler<FormValues> = (data) => {
		try {
			console.log(data)
		} catch (error) {
			
		}
	}
	return (
		<Row
			justify='center'
			align='middle'
			style={{
				height: '100vh'
			}}
		>
			<Col sm={12} md={16} lg={10}>
				<Image src={ loginImage } width={500} alt='Login page image' />
			</Col>
			<Col sm={12} md={8} lg={8}>
				<h1
					style={{
						margin: '15px 0px'
					}}
				>First login your account</h1>
				<div>
					<Form submitHandler={onSubmit}>
						<div
							style={{
								margin: '15px 0px'
							}}
						>
							<FormInput name='id' label='User id' type='text' size='large' placeholder='User Id' />
							<FormInput name='password' label='User password' type='password' size='large' placeholder='User Password' />
						</div>
						<Button type='primary' htmlType='submit'>
							Login
						</Button>
					</Form>
				</div>
			</Col>
		</Row>
	);
};

export default Login;