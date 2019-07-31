import React from "react";
import styles from "./FrontPage.module.css";

const index = ({ right, left }) => {
	return (
		<div className="">
			<section className="">
				<div className="container ">
					<div className={styles.Container}>
						<div className={styles.Sides}>
							<div className={styles.Right}>
								<div>{right}</div>
							</div>
							<div className={styles.Left}>
								<div>{left}</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default index;
