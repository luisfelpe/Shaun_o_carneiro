"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Page() {
	const router = useRouter();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState<string | null>(null);

	async function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setLoading(true);
		setMessage(null);
		try {
			const res = await fetch("/api/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }),
			});
			const data = await res.json();
			if (res.ok) {
				router.push("/geral");
			} else {
				setMessage(data.message || "Credenciais inválidas");
			}
		} catch (err) {
			setMessage("Erro de conexão");
		} finally {
			setLoading(false);
		}
	}

	return (
		<main className={styles.loginPage}>
			<div className={styles.heroInner}>
				<div className={styles.logoContainer} aria-hidden="true">
					<div className={styles.logo}>🐑</div>
					<div className={styles.brand}>Suffolk</div>
				</div>
				<form className={styles.loginCard} onSubmit={handleSubmit}>
					<h1 className={styles.title}>Sign In</h1>

					<label className={styles.label}>
						<span className={styles.labelText}>Email</span>
						<input
							className={styles.input}
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder="seu.usuario"
							required
						/>
					</label>

					<label className={styles.label}>
						<span className={styles.labelText}>Password</span>
						<input
							className={styles.input}
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="••••••••"
							required
						/>
					</label>

					<button className={styles.btn} type="submit" disabled={loading}>
						{loading ? "Signing in..." : "Sign In"}
					</button>

					{message && <p className={styles.message}>{message}</p>}

					<div className={styles.cardFoot}>
						<p className={styles.hint}>
							<a href="#">Forgot password?</a>
						</p>
					</div>
				</form>
			</div>
		</main>
	);
}

