<?php require_once $_SERVER['DOCUMENT_ROOT'].'/blocks/head.php' ?>
<?php require_once $_SERVER['DOCUMENT_ROOT'].'/blocks/header.php' ?>

<main>
    <div class="price" id="price">
        <div class="container container-frame">
            <div class="price__content">
                <!-- Цветной лом -->
                <?php require_once $_SERVER['DOCUMENT_ROOT'].'/blocks/colorScrapBlock.php' ?>
                <!-- Черный лом-->
                <?php require_once $_SERVER['DOCUMENT_ROOT'].'/blocks/blackScrapBlock.php' ?>
                <!-- Элеткронный лом -->
                <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/blocks/electronicScrapBlock.php' ?>
                <!-- Элеткронный лом -->
            </div>
            <!-- /.price__content -->
        </div>
        <!-- /.container -->
    </div>
    <!-- /.price -->

    <?php require_once $_SERVER['DOCUMENT_ROOT'].'/blocks/map.php' ?>
</main>
<?php require_once $_SERVER['DOCUMENT_ROOT'].'/blocks/footer.php' ?>

