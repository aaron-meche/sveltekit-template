<nav class="navbar">
    <a class="brand" href="#self">
        <span>Aaron Meche</span>
    </a>
    <div class="nav-links">
        <a href="#self">Alphabet</a>
        <a href="#self">Xylophone</a>
    </div>
</nav>

<style>
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: var(--navbar-height);
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 var(--inline-moat);
        background: var(--bg-transparent);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        border-bottom: 1px solid var(--l2);
    }

    .brand {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        font-weight: 600;
        font-size: 1rem;
        color: var(--contrast);
        text-decoration: none;
        transition: opacity 0.15s;
    }

    .brand:hover {
        opacity: 0.75;
    }

    .pfp {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        object-fit: cover;
        display: block;
    }

    .nav-links {
        display: flex;
        gap: 0.125rem;
    }

    .nav-links a {
        display: inline-flex;
        padding: 0.4rem 0.8rem;
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--contrast);
        opacity: 0.65;
        border-radius: 0.3rem;
        transition: opacity 0.15s, background 0.15s;
    }

    .nav-links a:hover {
        opacity: 1;
        background: var(--l2);
    }

    @media (max-width: 600px) {
        .brand span {
            display: none;
        }

        .nav-links a {
            padding: 0.4rem 0.5rem;
            font-size: 0.8rem;
        }
    }
</style>
