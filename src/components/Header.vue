<template>
    <header class="header">
        <RouterLink to="/" class="header__logo">Mon site</RouterLink>
        <nav>
            <RouterLink to="/blog">Blog</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>
</template>

<script setup></script>

<style>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 1rem;
    gap: 1rem;
    background: #ffffff10;
    border-bottom: 1px solid #00ff37;
}

.header a {
    text-decoration: none;
    color: inherit;
}


</style>