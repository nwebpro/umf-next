import { Col, Row } from 'antd';
import loginImage from '@/assets/login-image.svg'
import Image from 'next/image';
import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';

const Login = () => {
	return (
		<Row>
			<Col sm={12} md={16} lg={16}>
				<Image src={ loginImage } alt='' />
			</Col>
			<Col sm={12} md={8} lg={8}>
				<h1>First login your account</h1>
				<div>
					<Form>
						<div>
							<FormInput />
						</div>
					</Form>
				</div>
			</Col>
		</Row>
	);
};

export default Login;