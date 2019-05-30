import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Bio, Skills, Contact, Projects } from 'Components/landing'

export default () => (
	<Layout>
		<SEO />
		<Intro />
		<Bio />
		<Projects />
		{/* <Skills /> */}
		<Contact />
	</Layout>
)
