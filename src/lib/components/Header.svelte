<script>
    import picture from "$lib/assets/profile-picutre-1.webp";
</script>

<header class="navbar bg-base-100">
    <div class="flex-1">
        <a class="normal-case text-xl" href="/">Cinema</a>
    </div>
    <div class="flex-none">
        <div class="dropdown dropdown-end mr-1">
            <a href="/cart" tabindex="0" class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    <span class="badge badge-sm indicator-item">8</span>
                </div>
            </a>
        </div>
        <div class="dropdown dropdown-end">
            <button tabindex="0" class="btn btn-ghost btn-circle avatar">
                <img src={picture} alt="profile picture" class="w-10 rounded-full text-sm"/>
            </button>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a class="justify-between" href="/profile">
                        Profile
                    </a>
                </li>
                <li><a href="/sign-out">Logout</a></li>
            </ul>
        </div>
    </div>
</header>
