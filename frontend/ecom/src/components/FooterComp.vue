<script setup>
</script>

<template>
    <div class="efooter">
        <div class="eOption-footer">
            <!-- Options -->
            <div class="eOptions">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Condition Of Use</p>
                <p>Terms To Follow</p>
            </div>
            <div class="eOptions">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Condition Of Use</p>
                <p>Terms To Follow</p>
            </div>
        </div>
        <!-- Icon with copyright -->
        <p>© 2025 E-Commerce App. Created as part of a YouTube Build Series for educational purposes.</p>
    </div>
</template>

<style scoped>
.efooter {
    width: 100vw;
    height: 300px;
    background-color: #212121;
    position: absolute;
    bottom: 0px;
    padding: 16px;
    color: white;
    text-align: center;
}

.eOption-footer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
}

.eOptions {
    /* margin-top: 40px; */
    margin: 7px;
    color: white;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: green;
}
</style>