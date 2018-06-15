import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent {

  result: string

  onKey(input: string): void {
  	console.log(input)

    var splitLines = input.split("\n")

    var resultTaken = ""

    splitLines.forEach(function(entry) {
       resultTaken = resultTaken + DashboardComponent.toParsedString(entry) +
        "\n\n-------------------------\n\n"
    });

    this.result = resultTaken

  }

  private static toParsedString(possibleString: String): string {
    var firstIndex = possibleString.indexOf('(')
    var lastIndex = possibleString.lastIndexOf(')')
    var inputSubstring = possibleString.substring(firstIndex + 1, lastIndex)

    var splitInput = inputSubstring.split("&") 

    var resultTaken = ""

    splitInput.forEach(function(entry) {
      resultTaken = resultTaken + decodeURIComponent(entry) + "\n"
    });

    return resultTaken.toString()
  }
}
