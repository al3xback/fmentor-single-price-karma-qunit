const getBodyContent = () => {
	const content = `
        <div id="wrapper">
            <header>
                <h1 class="sr-only">Single price grid component</h1>
            </header>

            <main>
                <div class="container">
                    <div class="card">
                        <section class="card__block card__block--join-community">
                            <h2 class="card__title">Join our community</h2>
                            <mark class="card__mark"
                                >30-day, hassle-free money back guarantee</mark
                            >
                            <p class="card__desc">
                                Gain access to our full library of tutorials along
                                with expert code reviews. Perfect for any developers
                                who are serious about honing their skills.
                            </p>
                        </section>
                        <div class="card__group">
                            <section
                                class="card__block card__block--monthly-subsription">
                                <h3 class="card__title">Monthly Subscription</h3>
                                <p class="card__price">
                                    <span class="num">$29</span>
                                    <span class="label">per month</span>
                                </p>
                                <p class="card__desc">
                                    Full access for less than $1 a day
                                </p>
                                <a href="#" class="btn btn--primary btn--full"
                                    >Sign Up</a
                                >
                            </section>
                            <section class="card__block card__block--why-us">
                                <h3 class="card__title">Why Us</h3>
                                <ul class="card__list">
                                    <li>Tutorials by industry experts</li>
                                    <li>Peer &amp; expert code review</li>
                                    <li>Coding exercises</li>
                                    <li>Access to our GitHub repos</li>
                                    <li>Community forum</li>
                                    <li>Flashcard decks</li>
                                    <li>New videos every week</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <div class="container">
                    <p>
                        Challenge by
                        <a
                            href="https://www.frontendmentor.io?ref=challenge"
                            class="btn btn--link"
                            rel="noopener"
                            target="_blank"
                            >Frontend Mentor</a
                        >. Coded by
                        <a
                            href="https://github.com/al3xback"
                            class="btn btn--link"
                            rel="noopener"
                            target="_blank"
                            >al3xback</a
                        >.
                    </p>
                </div>
            </footer>
        </div>
    `;

	return content;
};
