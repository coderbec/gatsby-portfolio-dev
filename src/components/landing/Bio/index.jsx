import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Container, Button } from 'Common'
import dev from 'Static/illustrations/skills.svg'
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles'

export const Bio = () => (
	<Wrapper id="about">
		<SkillsWrapper as={Container}>
			<Thumbnail>
				<img src={dev} alt="@coder_bec" />
			</Thumbnail>
			<Details>
				<h1>Short Bio</h1>
				<p>
				Bec is Head of Developer Relations at MessageMedia. 
				She works at the intersection of government, startups, and technology. 
				She has worked on a variety of different projects for both enterprise 
				and SME clients as a technology consultant, and mobile apps developer. 
				She draws on her broad range of experiences and insight as a consultant 
				and policy adviser in product, strategy and innovation. At MessageMedia, 
				she is an advocate for developers who use MessageMedia’s global messaging solutions.
				</p>
				<Button as={AnchorLink} href="#contact">
					Contact
				</Button>
			</Details>
		</SkillsWrapper>
	</Wrapper>
)
