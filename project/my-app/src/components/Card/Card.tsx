import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useDispatch } from "react-redux";
import { addToTheCart } from "../../features/cartSlice";
import pizzaType from "../../Types/pizzaType";

function ImgMediaCard({ pizzaName, price }: pizzaType): JSX.Element {
	const dispatch = useDispatch();

	function addPizzaToTheCart(): void {
		dispatch(addToTheCart({ pizzaName, price }));
	}

	return (
		<Card sx={{ maxWidth: 300 }}>
			<CardMedia
				component="img"
				alt="pizza"
				height="140"
				image="data:image/jpeg;base64,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"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{pizzaName}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{`$${price}`}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" onClick={addPizzaToTheCart}>
					Add To Cart
				</Button>
			</CardActions>
		</Card>
	);
}

export default ImgMediaCard;
