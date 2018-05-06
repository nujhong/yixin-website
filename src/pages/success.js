import React from 'react'
import Header from '../components/Header'
import Link from 'gatsby-link'
import QRCode from '../img/wechat-QR-code.jpeg'

const SuccessPage = () => (
	<div>
		<Header />
		<div className="hero">
			<div className="hero-body has-text-centered">
				<div className="container">
					<div className="content">
						{/* <h3 className="title is-3">Success</h3> */}
						<img
							src={QRCode}
							alt="wechat"
							style={{ maxHeight: '400px', width: ' auto' }}
						/>
						<p>您的信息已被成功发送，我们将尽快通过您留下的联系方式给您回复</p>
						<p>同时您也可以通过扫一扫上方的二维码加我们的微信</p>
						<Link to="/" className="button is-primary">
							返回主页
						</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default SuccessPage
