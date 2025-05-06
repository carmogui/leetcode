// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let l1PlainText = "";
  let l2PlainText = "";

  let tempListNode = l1;

  while (tempListNode !== null) {
    l1PlainText = String(tempListNode.val) + l1PlainText;
    tempListNode = tempListNode.next;
  }

  tempListNode = l2;

  while (tempListNode !== null) {
    l2PlainText = String(tempListNode.val) + l2PlainText;
    tempListNode = tempListNode.next;
  }

  const sum = BigInt(l1PlainText) + BigInt(l2PlainText);
  const sumPlainText = String(sum);

  let result: ListNode | null = null;
  let nextResult: ListNode | null = null;

  const sumTextReversedList = sumPlainText.split("").reverse();
  sumTextReversedList.forEach((val) => {
    const valNumber = Number(val);

    const newListNode = new ListNode(valNumber, null);

    if (result === null) {
      result = newListNode;
    } else if (result.next === null) {
      result.next = newListNode;
    } else {
      nextResult = result.next;

      while (nextResult.next !== null) {
        nextResult = nextResult.next;
      }

      nextResult.next = newListNode;
    }
  });

  return result;
}
