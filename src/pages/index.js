import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="180px 0 180px 0" sm-padding="40px 0">
			<Override slot="SectionContent" align-items="flex-start" flex-direction="row" flex-wrap="wrap" />
			<Box width="25%" transition="all 0.5s --transitionTimingFunction-easeIn 0s" hover-transform="translate(-30px, -80px)" cursor="pointer">
				<Box
					padding="20px 20px 20px 20px"
					background="#004389"
					margin="20px 20px 20px 20px"
					hover-transform="translateX(20px)"
					display="flex"
					align-items="center"
					justify-content="center"
					align-content="center"
					height="110px"
				>
					<Text margin="0px 0px 0px 0px" text-align="center" font="normal 600 20px/1.5 --fontFamily-sans" color="--light">
						transform
						<br />
						translate(30px, 20px);
					</Text>
				</Box>
			</Box>
			<Box width="25%" transition="all 0.5s --transitionTimingFunction-easeIn 0s" hover-transform="translateX(80px)" cursor="pointer">
				<Box
					padding="20px 20px 20px 20px"
					background="#004389"
					margin="20px 20px 20px 20px"
					hover-transform="translateX(20px)"
					display="flex"
					align-items="center"
					justify-content="center"
					align-content="center"
					height="110px"
				>
					<Text margin="0px 0px 0px 0px" text-align="center" font="normal 600 20px/1.5 --fontFamily-sans" color="--light">
						transform translateX(20px){"\n\n"}
					</Text>
				</Box>
			</Box>
			<Box width="25%" transition="all 0.5s --transitionTimingFunction-easeIn 0s" hover-transform="translateY(-20px)" cursor="pointer">
				<Box
					padding="20px 20px 20px 20px"
					background="#004389"
					margin="20px 20px 20px 20px"
					hover-transform="translateX(20px)"
					display="flex"
					align-items="center"
					justify-content="center"
					align-content="center"
					height="110px"
				>
					<Text margin="0px 0px 0px 0px" text-align="center" font="normal 600 20px/1.5 --fontFamily-sans" color="--light">
						transform translateY(-20px){"\n\n"}
					</Text>
				</Box>
			</Box>
			<Box width="25%" transition="all 0.5s --transitionTimingFunction-easeIn 0s" hover-transform="scale(0.5, 1.5)" cursor="pointer">
				<Box
					padding="20px 20px 20px 20px"
					background="#004389"
					margin="20px 20px 20px 20px"
					hover-transform="translateX(20px)"
					display="flex"
					align-items="center"
					justify-content="center"
					align-content="center"
					height="110px"
				>
					<Text margin="0px 0px 0px 0px" text-align="center" font="normal 600 20px/1.5 --fontFamily-sans" color="--light">
						transform
						<br />
						{" "}scale(0.5, 0.5);
					</Text>
				</Box>
			</Box>
			<Box width="25%" transition="all 0.5s --transitionTimingFunction-easeIn 0s" hover-transform="scaleX(0.5);" cursor="pointer">
				<Box
					padding="20px 20px 20px 20px"
					background="#004389"
					margin="20px 20px 20px 20px"
					hover-transform="translateX(20px)"
					display="flex"
					align-items="center"
					justify-content="center"
					align-content="center"
					height="110px"
				>
					<Text margin="0px 0px 0px 0px" text-align="center" font="normal 600 20px/1.5 --fontFamily-sans" color="--light">
						transform
						<br />
						scaleX(-1);{"\n\n"}
					</Text>
				</Box>
			</Box>
			<Box width="25%" transition="all 0.5s --transitionTimingFunction-easeIn 0s" hover-transform="scaleY(.5);" cursor="pointer">
				<Box
					padding="20px 20px 20px 20px"
					background="#004389"
					margin="20px 20px 20px 20px"
					hover-transform="translateX(20px)"
					display="flex"
					align-items="center"
					justify-content="center"
					align-content="center"
					height="110px"
				>
					<Text margin="0px 0px 0px 0px" text-align="center" font="normal 600 20px/1.5 --fontFamily-sans" color="--light">
						transform
						<br />
						{" "}scaleY(1.2);
					</Text>
				</Box>
			</Box>
			<Box width="25%" transition="all 0.5s --transitionTimingFunction-easeIn 0s" hover-transform="rotate(-180deg);" cursor="pointer">
				<Box
					padding="20px 20px 20px 20px"
					background="#004389"
					margin="20px 20px 20px 20px"
					hover-transform="rotate(720deg);"
					display="flex"
					align-items="center"
					justify-content="center"
					align-content="center"
					height="110px"
				>
					<Text margin="0px 0px 0px 0px" text-align="center" font="normal 600 20px/1.5 --fontFamily-sans" color="--light">
						transform
						<br />
						rotate(720deg);{"\n\n\n\n"}
					</Text>
				</Box>
			</Box>
			<Box width="25%" transition="all 0.5s --transitionTimingFunction-easeIn 0s" hover-transform="skew(-40deg, 30deg)" cursor="pointer">
				<Box
					padding="20px 20px 20px 20px"
					background="#004389"
					margin="20px 20px 20px 20px"
					hover-transform="rotate(720deg);"
					display="flex"
					align-items="center"
					justify-content="center"
					align-content="center"
					height="110px"
				>
					<Text margin="0px 0px 0px 0px" text-align="center" font="normal 600 20px/1.5 --fontFamily-sans" color="--light">
						transform
						<br />
						skewX(20deg);{"\n\n"}
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