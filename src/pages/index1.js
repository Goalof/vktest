import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index1"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="180px 0 180px 0" sm-padding="40px 0">
			<Override
				slot="SectionContent"
				align-items="center"
				flex-direction="row"
				flex-wrap="wrap"
				align-content="center"
				justify-content="center"
			/>
			<Box width="50%" transition="all 0.5s --transitionTimingFunction-easeIn 0s" hover-transform="matrix(1.2,0,0.5,1.2,50,0)" cursor="pointer">
				<Box
					padding="20px 20px 20px 20px"
					background="--color-lightD2"
					margin="20px 20px 20px 20px"
					hover-transform="translateX(20px)"
					display="flex"
					align-items="center"
					justify-content="center"
					align-content="center"
					height="150px"
				>
					<Text margin="0px 0px 0px 0px" text-align="center" font="normal 600 20px/1.5 --fontFamily-sans">
						transform
						<br />
						{" "}matrix?
					</Text>
				</Box>
			</Box>
			<Box width="50%" transition="all 0.5s --transitionTimingFunction-easeIn 0s" hover-transform="matrix(1.2,0,0.5,1.2,50,0)" cursor="pointer">
				<Box
					padding="20px 20px 20px 20px"
					background="--color-lightD2"
					margin="20px 20px 20px 20px"
					hover-transform="translateX(20px)"
					display="flex"
					align-items="center"
					justify-content="center"
					align-content="center"
					height="150px"
				>
					<Text margin="0px 0px 0px 0px" text-align="center" font="normal 600 20px/1.5 --fontFamily-sans">
						transform
						<br />
						{" "}scaleX(?) scaleY(?) skewX(?) skewY(?) translateX(?) translateY(?)
					</Text>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});