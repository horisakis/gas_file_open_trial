function main() {
    var html = HtmlService.createHtmlOutputFromFile("dialog")
    SpreadsheetApp.getUi().showModalDialog(html, "ローカルファイル読み込み")
}

function writeSheet(formObject) {

    // フォームで指定したテキストファイルを読み込む
    var fileBlob = formObject.myFile;

    // // テキストとして取得（Windowsの場合、文字コードにShift_JISを指定）
    // var text = fileBlob.getDataAsString("sjis")
    var text = fileBlob.getDataAsString("utf-8")

    //  改行コードで分割し配列に格納する
    var textLines = text.split(/[\s]+/)

    // 書き込むシートを取得
    var sheet = SpreadsheetApp.getActiveSheet()

    // テキストファイルをシートに展開する
    for (var i = 0; i < textLines.length; i++) {
        sheet.getRange(i + 1, 1).setValue(textLines[i]);
        
    }
    
    // 処理終了のメッセージボックスを出力
    Browser.msgBox("ローカルファイルを読み込みました")

}