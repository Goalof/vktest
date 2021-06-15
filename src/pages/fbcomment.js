import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"fbcomment"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section>
			<Text font="--headline2">
				Euro 2021: Denmark vs. Finland temporarily suspended after Christian Eriksen collapses on the field{"\n\n"}
			</Text>
			<Image
				width="100%"
				height="500px"
				src="https://uploads.quarkly.io/607598bf23a143001e08e63f/images/1.jpg?v=2021-06-15T09:34:00.675Z"
				object-fit="cover"
				object-position="0% 100%"
				margin="20px 0px 0px 0px"
			/>
			<Text font="--lead">
				Euro 2021 organizers UEFA temporarily suspended the Group B match between Denmark and Finland on Sunday after a medical emergency involving Denmark's Christian Eriksen.
				<br />
				<br />
				The UEFA EURO 2020 match in Copenhagen has been suspended due to a medical emergency.— UEFA (@UEFA){" "}
				<Link
					href="https://twitter.com/UEFA/status/1403758240295424007?ref_src=twsrc%5Etfw"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
				>
					June 12, 2021
				</Link>
				<br />
				<br />
				The Parken Stadium in Copenhagen, Denmark went silent just before halftime when Eriksen, Denmark's star midfielder, collapsed to the ground after taking a touch on a throw-in. Team medical staff raced to tend to the playmaker after his teammates motioned frantically for help. There was no contact with opposition players before he fell to the ground. (
				<Link
					href="https://www.youtube.com/watch?v=TiygiXA0Lag"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--primary"
				>
					Footage of the incident
				</Link>
				{" "}is graphic and disturbing).{"\n\n"}
			</Text>
			<Components.QuarklycommunityKitVkComments apiId="7880795" />
			<Box display="flex" />
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